import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  markdown: string;
}

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  const renderedMarkdown = markdown
    .replace(/^>\s*\[!NOTE\]/gmu, "> **Note**")
    .replace(/^>\s*\[!WARNING\]/gmu, "> **Warning**")
    .replace(/^>\s*\[!TIP\]/gmu, "> **Tip**");

  return (
    <article className="career-markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => <h1 id={slugifyText(children)}>{children}</h1>,
          h2: ({ children }) => <h2 id={slugifyText(children)}>{children}</h2>,
          h3: ({ children }) => <h3 id={slugifyText(children)}>{children}</h3>,
          a: ({ children, href }) => (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => {
            const text = getText(children);
            const callout = getCallout(text);

            return (
              <blockquote
                className={cn(
                  callout &&
                    "rounded-md border-l-4 bg-muted/40 px-4 py-3 not-italic [&>p:first-child]:mt-0 [&>p:last-child]:mb-0",
                  callout === "note" && "border-l-sky-500",
                  callout === "warning" && "border-l-amber-500",
                  callout === "tip" && "border-l-emerald-500"
                )}
              >
                {children}
              </blockquote>
            );
          },
          img: ({ src, alt }) => (
            <img
              src={src ?? ""}
              alt={alt ?? ""}
              className="rounded-lg border bg-muted object-cover shadow-sm"
              loading="lazy"
            />
          )
        }}
      >
        {renderedMarkdown}
      </ReactMarkdown>
    </article>
  );
}

function getCallout(value: string) {
  if (value.includes("[!NOTE]")) {
    return "note";
  }

  if (value.includes("[!WARNING]")) {
    return "warning";
  }

  if (value.includes("[!TIP]")) {
    return "tip";
  }

  return null;
}

function slugifyText(value: unknown) {
  return getText(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/gu, "")
    .trim()
    .replace(/\s+/gu, "-");
}

function getText(value: unknown): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(getText).join("");
  }

  if (isReactElementWithChildren(value)) {
    return getText(value.props.children);
  }

  return "";
}

function isReactElementWithChildren(value: unknown): value is { props: { children?: unknown } } {
  return typeof value === "object" && value !== null && "props" in value;
}

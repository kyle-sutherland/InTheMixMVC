import React from "react";

const buttonStyle: string =
  "rounded-md bg-bosporus px-3 py-2 text-sm text-bleached-silk shadow-sm hover:bg-opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-thistle-blossom";

interface LinkButtonProps {
  link?: string;
  text?: string;
  tarket?: string;
  rel?: string;
}

export function LinkButton({ link, text, target, rel }: LinkButtonProps) {
  return (
    <>
      <a
        href={link ? link : "#"}
        target={target ? target : ""}
        rel={rel ? rel : ""}
        className={buttonStyle}
      >
        {text}
      </a>
    </>
  );
}

interface ActionButtonProps {
  type?: string;
  text?: string;
  disabled?: boolean;
}
export function ActionButton({ type, text, disabled }: ActionButtonProps) {
  return (
    <>
      <button
        className={buttonStyle}
        type={type}
        disabled={disabled ? disabled : false}
      >
        {text}
      </button>
    </>
  );
}

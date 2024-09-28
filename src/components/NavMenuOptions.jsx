import React from "react";


export const NavMenuOptions = () => {
  return (
    <>
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["CEP", "/dashboard"],
          ["CNPJ", "/team"],
          ["BANCOS", "/projects"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-200 has-[:active]:bg-slate-900"
          >
            {title}
          </a>
        ))}
      </nav>
    </>
  );
};

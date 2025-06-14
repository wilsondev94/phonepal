interface InputProps {
  type: string;
  placeholder: string;
  id: string;
}

export function Input({ type, placeholder, id }: InputProps) {
  return (
    // <input
    //   type={type}
    //   placeholder={placeholder}
    //   className="flex h-12 w-full border-b bg-transparent py-1 text-base transition-colors file:border-0 placeholder:text-muted-foreground focus-visible:border-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    // />

    <div className="w-full relative">
      <input
        id={id}
        autoComplete="off"
        // id={id}
        placeholder=""
        // disabled={disabled}
        type={type}
        // {...register(id, { required })}
        className={`
        w-full peer py-2 pt-6 outline-none border-b font-light transition focus-visible:border-black disabled:opacity-70 disabled:cursor-not-allowed
        `}
        // ${errors[id] ? "border-rose-400" : "border-slate-300"}
        // ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-300"}
      />
      <label
        htmlFor={id}
        className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4  
          `}
        // ${errors[id] ? "text-rose-400" : "text-slate-400"}
      >
        {placeholder}
      </label>
    </div>
  );
}

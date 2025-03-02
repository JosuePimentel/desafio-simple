function Button(props: { text: string, class: string }) {
  return <button className="class z-[5] uppercase py-2 px-6 rounded-xl bg-(--color-primary-500) font-semibold text-lg">{ props.text }</button>;
}
export default Button;
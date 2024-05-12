function SectionHeader({ content }) {
  return (
    <div className="relative flex items-center gap-4 capitalize text-secondary3">
      <span className="w-5 h-10 rounded bg-secondary3"></span>
      <h1 className="font-semibold ">{content}</h1>
    </div>
  );
}
export default SectionHeader;

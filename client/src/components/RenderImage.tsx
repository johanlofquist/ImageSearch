interface IRenderImage {
  url: string;
}

export const RenderImage = (props: IRenderImage) => {
  return (
    <img
      src={props.url}
      className="h-[200px] rounded drop-shadow-xl hover:scale-105 transition-all"
    />
  );
};

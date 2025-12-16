import classNames from "classnames";

const gradients = 5;

export default function BackgroundTexture() {
  return (
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute inset-0 bg-blend-multiply"
        style={{ filter: "url(#grain)" }}
      />
      {Array.from({ length: gradients }).map((_, index) => {
        const zIndex = (index + 1) * -1;
        const gradient = `sun-${index + 1}`;
        return (
          <div
            key={index}
            className={classNames("absolute inset-0", gradient)}
            style={{
              zIndex,
            }}
          />
        );
      })}
    </div>
  );
}

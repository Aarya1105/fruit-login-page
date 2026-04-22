export default function Eye({ mouse, eyeX, eyeY, size = 24 }) {
  const dx = mouse.x - eyeX;
  const dy = mouse.y - eyeY;
  const angle = Math.atan2(dy, dx);

  const maxMove = 5;
  const pupilX = Math.cos(angle) * maxMove;
  const pupilY = Math.sin(angle) * maxMove;

  return (
    <div
      className="eye"
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className="pupil"
        style={{
          transform: `translate(${pupilX}px, ${pupilY}px)`,
        }}
      />
    </div>
  );
}

export function Header() {
  return (
    <box justifyContent="center" alignItems="center">
      <box
        flexDirection="row"
        justifyContent="center"
        gap={1}
        alignItems="center"
      >
        <ascii-font font="grid" text="Me" color="gray" />
        <ascii-font font="slick" text="Code" />
      </box>
    </box>
  );
}
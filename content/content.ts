interface ILink {
  href: string
  title: string
  disabled?: boolean
}

const LINKS: readonly ILink[] = [
  {
    href: "/the-meaning-of-the-church-membership",
    title: "Значення членства в церкві",
  },
  {
    disabled: true,
    href: "/scripture",
    title: "Писання",
  },
];

export default LINKS;

export const Footer = () => {
  return (
    <footer className="py-8 text-center text-muted-foreground border-t border-border">
      <p className="text-sm">
        © {new Date().getFullYear()} fzisch. All rights reserved.
      </p>
    </footer>
  );
};

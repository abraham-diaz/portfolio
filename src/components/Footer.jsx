export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-1.5 text-center text-sm">
          <p className="text-gray-300 font-medium">Abraham Díaz Ahijón</p>
          <p className="text-gray-500">Full Stack Developer Jr. · JavaScript · TypeScript · Python · Node.js</p>
          <p className="text-gray-600 mt-2">© {new Date().getFullYear()} · Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

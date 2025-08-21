export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold text-red-600">Oops! Algo salió mal 😢</h1>
        <p className="mt-2 text-gray-600">Intenta recargar la página o volver al inicio.</p>
      </div>
    </div>
  );
}
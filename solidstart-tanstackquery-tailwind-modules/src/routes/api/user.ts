
export function GET () {
  const token = window.sessionStorage.getItem('token');
  return new Response(token);
}
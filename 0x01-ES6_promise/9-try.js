export default function guardrail(mathFunction) {
  const queue = [];
  const msg = 'Guardrail was processed';
  try {
    const val = mathFunction();
    queue.push(val, msg);
  } catch (e) {
    queue.push(`Error: ${e.message}`, msg);
  }
  return queue;
}

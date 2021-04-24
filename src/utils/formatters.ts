
export function formatDateBR(date: String) {
    return date.split('-').reverse().join('/');
}

export function minutesToHours(num: number): string {
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return `${rhours} h ${rminutes}m`;
  }
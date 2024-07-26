// import $ from 'jquery';

export function openCloseModal(name: string): void {
  const modal = document.getElementById(name);
  if (modal) {
    ($(modal) as any).modal('toggle');
  }
}

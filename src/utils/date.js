export class DateUtils {
  static formatDateForInput(dateString) {
    const parts = dateString.split('/');
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(
        2,
        '0'
      )}`;
    }
    return dateString;
  }

  static formatDateForDisplay(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR');
  }
}

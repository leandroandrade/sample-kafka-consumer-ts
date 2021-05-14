export const boolean = value => (value ? value.toLowerCase().trim() === 'true' : false);
export const string = value => (value ? value.trim() : '');
export const number = value => Number(value) || 0;
export const array = value =>
    value
        ? value
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)
        : [];


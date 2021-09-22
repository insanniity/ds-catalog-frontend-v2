export const formatPrice = (price: string) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits:2 }).format(parseFloat(price));
}
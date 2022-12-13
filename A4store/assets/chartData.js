export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


export function getDaywiseSaleData(purchasedItems) {
    let totalSaleAndQuantity = []
    for (let i = 0; i < purchasedItems.length; i++) {
        let sale = 0
        let quantity = 0
        for (let j = 0; j < purchasedItems.length; j++) {
            if (getRequiredTime(purchasedItems[j].createdAt).givenDate == i + 1 &&
                getRequiredTime(purchasedItems[j].createdAt).givenMonth ==
                getCurrentTime().currMonth &&
                getRequiredTime(purchasedItems[j].createdAt).givenYear ===
                getCurrentTime().currYear) {
                sale += Number(purchasedItems[j].product['woocommerce-Price-amount 2'])
                quantity += Number(purchasedItems[j].quantity)
            }
        }
        totalSaleAndQuantity.push({
            day: i + 1,
            revenue: sale,
            totalQuantity: quantity,
            monthName: monthNames[getCurrentTime().currMonth - 1]
        })
    }
    return totalSaleAndQuantity
}

export function getRevenueOfGivenYear(purchasedItems, year) {
    if (year.length < 4) return undefined;
    //getting data for current year and last year

    let result = purchasedItems.reduce((acc, ele) => {
        if (getRequiredTime(ele.createdAt).givenYear == year) {
            return (
                acc + ele.quantity * Number(ele.product['woocommerce-Price-amount 2'])
            )
        }
    }, 0)
    if (!result) result = 0;
    return result;
}





export function getCurrentTime() {
    let currMonth = new Date().getMonth() + 1
    let currDate = new Date().getDate()
    let currYear = new Date().getFullYear()
    return { currMonth, currDate, currYear }
}
export function getRequiredTime(time) {
    let givenDate = new Date(time).getDate()
    let givenMonth = new Date(time).getMonth() + 1
    let givenYear = new Date(time).getFullYear()
    return { givenDate, givenMonth, givenYear }
}
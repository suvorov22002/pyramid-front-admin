export class GlobalConstants {

    public static genericError: string = "Something went wrong. Please try again later";

    public static nameRegex: string = "[a-zA-Z0-9 ]*";
    public static emailRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    public static contactNumberRegex: string = "^[0-9]{10,10}$";
    public static error: string = 'error';
    public static unauthorized: string = "You are not authorized to access this page.";
    public static productExistError: string = "Product already exists";
    public static productAdded: string = "Product added successfully";


}

export function isEmpty(data: any[]) {
    return data.length == 0
}

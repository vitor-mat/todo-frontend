import { DefaultToastOptions, Renderable, Toast, ToastOptions, ValueOrFunction } from "react-hot-toast";


type Message = ValueOrFunction<Renderable, Toast>;
type ToastHandler = (message: Message, options?: ToastOptions) => string;
export interface  IToast {
    (message: Message, opts?: ToastOptions): string;
    error: ToastHandler;
    success: ToastHandler;
    loading: ToastHandler;
    custom: ToastHandler;
    dismiss(toastId?: string): void;
    remove(toastId?: string): void;
    promise<T>(promise: Promise<T>, msgs: {
        loading: Renderable;
        success: ValueOrFunction<Renderable, T>;
        error: ValueOrFunction<Renderable, any>;
    }, opts?: DefaultToastOptions): Promise<T>;
};
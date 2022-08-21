export interface IPagingation {
    onGoTo(page: number): void;

    onNext(page: number): void;

    onPrevious(page: number): void;
}
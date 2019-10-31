export type ExcludePrivateProps<T> = Exclude<
  T,
  "onClicks" | "validators" | "validator" | "onSubmit" | "state" | "onUpdate"
>;

/// <reference types='codeceptjs' />

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}

declare module 'cerebro-tools' {
  export function shellCommand(cmd: string): Promise<string>
}

export const useVariableValue = jest.fn()
export const useIsDevCycleInitialized = jest.fn().mockReturnValue(true)
export const useDevCycleClient = jest.fn().mockReturnValue({
    user: {}
})
export const withDevCycleProvider = jest.fn().mockReturnValue((app) => app)

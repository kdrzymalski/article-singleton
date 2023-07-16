class ApplicationGlobalConfig {
    private static instance: ApplicationGlobalConfig | null = null
    private port: number;
    private url: string;

    // Private keyword prevents new instances from being created outside of the class
    private constructor() {
        // initializing config logic there
        this.port = 5000;
        this.url = 'https://example.com';
    }

    public static getConfig(): ApplicationGlobalConfig {
        if (this.instance === null) {
            this.instance = new ApplicationGlobalConfig();
        }

        return this.instance;
    }

    public updatePort(newPort: number): void {
        this.port = newPort;
    }

    public updateUrl(newUrl: string): void {
        this.url = newUrl;
    }
}

const testConfig = ApplicationGlobalConfig.getConfig()

console.log(testConfig)
testConfig.updatePort(7000)
console.log(testConfig)
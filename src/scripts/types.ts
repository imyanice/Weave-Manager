export class LaunchProfile {
    public name: string
    public mcInfo: MinecraftInfo
    public modProfile: ModProfile

    constructor(
        name: string,
        mcInfo: MinecraftInfo,
        modProfile: ModProfile
    ) {
        this.name = name
        this.mcInfo = mcInfo
        this.modProfile = modProfile

        this.saveProfile()
    }

    public saveProfile() {
        if (this.modProfile)
            this.modProfile.saveProfile()
    }
    public launchProfile(): void {

    }
    public deleteProfile() {

    }
}

export class ModProfile {
    public name: string
    public mods: Mod[]

    constructor(
        name: string,
        mods: Mod[]
    ) {
        this.name = name
        this.mods = mods

        this.saveProfile()
    }

    public saveProfile() {

    }
}

export interface Mod {
    name: string
    description: string
    version: string
    authors: string[]
    filePath: string
    fileName: string
    disabled: boolean
}

export interface Agent {
    filePath: string
    fileName: string
    disabled: boolean
}

export interface MinecraftProcess {
    pid: number
    info: MinecraftInfo
}

export interface MinecraftInfo {
    client: string
    version: string
    cmd: string
    cwd: string
}
# Required Hardware and Software

If you haven't already, make sure you've completed [Required Hardware and Software](https://swe101.rocketacademy.co/course-logistics/required-hardware-and-software) setup from SWE101.

Please install the latest version of Windows or MacOS that your computer supports. This is so that students have the same and latest operating system features, as much as possible.

## Windows

### Windows Subsystem for Linux \(WSL\)

WSL allows us to run the Linux operating system on Windows machines. This is desirable because most programming is done on Unix-based operating systems, which include Linux and MacOS. Most SWEs using Windows machines at tech companies do their work in WSL to maximise compatibility between their work and that on Mac and Linux machines in the cloud.

1. Install WSL here: [https://docs.microsoft.com/en-us/windows/wsl/install-win10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
2. Install the latest version of Ubuntu: [https://www.microsoft.com/en-sg/p/ubuntu-2004-lts/9n6svws3rx71](https://www.microsoft.com/en-sg/p/ubuntu-2004-lts/9n6svws3rx71)

## Mac

### XCode Command Line Tools

XCode command line tools install relevant command line utilities such as Git for us to use our command line on Mac effectively.

```bash
 xcode-select --install
```

### Homebrew

Homebrew is a package manager for MacOS that allows developers to have a single source of truth for which packages are installed and what versions they are. This is typically only relevant to packages for the command line; GUI applications are typically not installed via Homebrew.

Homebrew typically manages OS-specific packages and not application-specific packages. Application-specific packages are typically managed by application-level package managers such as `npm` or `pip`. Application-specific packages are packages that are typically bundled and deployed together with an application, regardless of where those applications are running.

Follow the install instructions at: [https://brew.sh/](https://brew.sh/)

## Folder Organisation

In SWE1 we will be cloning starter code many times for new projects. To keep things organised, we recommend the following folder structure.

{% hint style="warning" %}
All files and folders are in kebab-case \(lowercase and hyphenated\) for ease of use on the command line. It is generally a bad idea to name any files or folders with a space in them.
{% endhint %}

1. Host all SWE1 code in a folder called `swe1`. Keep this in your `Documents` folder.
2. Within the `swe1` folder, for each week \(there are 24 total\) in SWE1, create a new folder for that week. This means you will have 24 week-specific folders, such as `week1`, `week2`, ..., `week24`.
3. Within each `weekX` folder, create 1 folder for each day of the week, i.e. `day1`, `day2`, ..., `day5`.
4. Within each `dayX` folder, create `pre-class`, `in-class`, and `post-class` folders for the respective exercises.
5. Within each `X-class`folder, keep a separate folder for every exercise you do that requires a new Git repo.
6. Store projects within a `projects` directory directly within the `swe1` folder for easy accessibility.


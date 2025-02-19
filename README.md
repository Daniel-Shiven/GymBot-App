# GymBot AI App

The app for GymBot AI.

## Prerequisites

To run the app, you'll need [Node.js](https://nodejs.org/en/download/),
[PNPM](https://pnpm.io), [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779)
and [Git](https://git-scm.com).

If you're developing the app, you'll also need to configure Git with your username
and email:

```sh
git config user.email a@gmail.com
git config user.name your_username
```

If you don't have PNPM you can install it:

```sh
npm i -g pnpm
```

### Windows

To install Git on Windows:

- Go to the Git Section of VS Code and select Download Git for Windows
  ![image](https://github.com/GymBotAI/App/assets/94528565/4707d973-ab8a-4ba6-bb21-bd87c6b8690f)
- Begin setup and be sure to select Windows Console when prompted

## Usage

Install dependencies:

```sh
pnpm i
```

If you're not on Windows, you should also configure Git hooks. This will
format your code before you commit. If you're on Windows, you'll need to
manually format your code before you commit by running `pnpm run format`.

```sh
git config core.hooksPath .githooks
```

Run the app:

```sh
pnpm run start
```

Then, scan the QR code on your phone and open it with the Expo Go app.

You can also run the app as a website:

```sh
pnpm run web
```

### Enabling debug logs

To enable all debug logs, set the environment variable `GYMBOT_DEBUG_LOGS` to `*`.
You can set it in the `.env.local` file:

```shell
GYMBOT_DEBUG_LOGS="*"
```

To enable debug logs for a specific module, set the environment variable
`GYMBOT_DEBUG_LOGS` to the module name. For example, to enable debug logs for
the chat, set `GYMBOT_DEBUG_LOGS` to `chat`.

```shell
GYMBOT_DEBUG_LOGS="chat"
```

You can also set it to a comma-separated list of modules:

```shell
GYMBOT_DEBUG_LOGS="auth,chat"
```

Note that changing the environment variable requires restarting Expo.

git shortlog -sn --all

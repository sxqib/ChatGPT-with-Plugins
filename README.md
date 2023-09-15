# ChatGPT with Plugins

ChatGPT with Plugins is an open source chat UI with plugins access. It utilizes the chatbot-ui as the base UI.

Test it with your OpenAI API key at: https://chat-gpt-with-plugins.vercel.app/


If you don't have access to the OpenAI API, you can test it for free using the ai4all API here: https://ai-4-all.vercel.app

Get you ai4all API key here: https://ai4all.saq1bb.repl.co

## Plugins Demo:
![demo](https://user-images.githubusercontent.com/48133047/246844909-ca71c866-5c9b-4795-b019-8998d3b43220.gif)

## Example Plugins to try:

```https://websearch.plugsugar.com/.well-known/ai-plugin.json```

```https://www.accesslinks.ai/.well-known/ai-plugin.json```

## Note:

> Currently, the only plugin url form it can handle is the one that ends with ```/.well-known/ai-plugin.json``` and does not require authentication.

> Even if you select more than one plugin, only one plugin is used for making a response.

> Currently, all the plugins you selected are shown upon a response.

## Docker

Build locally:

```shell
docker build -t chatgpt-ui .
docker run -e OPENAI_API_KEY=xxxxxxxx -p 3000:3000 chatgpt-ui
```

Pull from ghcr:

```
docker run -e OPENAI_API_KEY=xxxxxxxx -p 3000:3000 ghcr.io/mckaywrigley/chatbot-ui:main
```

## Running Locally

**1. Clone Repo**

```bash
git clone https://github.com/mckaywrigley/chatbot-ui.git
```

**2. Install Dependencies**

```bash
npm i
```

**3. Provide API Key**

Create a .env.local file in the root of the repo with your API Key:

```bash
OPENAI_API_KEY=YOUR_KEY
```

> You can set another OpenAI Host by modifying ```main/utils/app/const.ts```. By default, it is set to 'https://api.openai.com'.

> Additionally, if you have multiple OpenAI Organizations, you can set `OPENAI_ORGANIZATION` to specify one.

**4. Run App**

```bash
npm run dev
```

**5. Use It**

You should be able to start chatting.

## Configuration

When deploying the application, the following environment variables can be set:

| Environment Variable              | Default value                  | Description                                                                                                                               |
| --------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| OPENAI_API_KEY                    |                                | The default API key used for authentication with OpenAI                                                                                   |                                    |
| OPENAI_API_TYPE                   | `openai`                       | The API type, options are `openai` or `azure`                                                                                             |
| OPENAI_API_VERSION                | `2023-03-15-preview`           | Only applicable for Azure OpenAI                                                                                                          |
| AZURE_DEPLOYMENT_ID               |                                | Needed when Azure OpenAI, Ref [Azure OpenAI API](https://learn.microsoft.com/zh-cn/azure/cognitive-services/openai/reference#completions) |
| OPENAI_ORGANIZATION               |                                | Your OpenAI organization ID                                                                                                               |
| DEFAULT_MODEL                     | `gpt-3.5-turbo`                | The default model to use on new conversations, for Azure use `gpt-35-turbo`                                                               |
| NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT | [see here](utils/app/const.ts) | The default system prompt to use on new conversations                                                                                     |
| NEXT_PUBLIC_DEFAULT_TEMPERATURE   | 1                              | The default temperature to use on new conversations                                                                                       |
| GOOGLE_API_KEY                    |                                | See [Custom Search JSON API documentation][GCSE]                                                                                          |
| GOOGLE_CSE_ID                     |                                | See [Custom Search JSON API documentation][GCSE]                                                                                          |

If you do not provide an OpenAI API key with `OPENAI_API_KEY`, users will have to provide their own key.

If you don't have an OpenAI API key, you can get one [here](https://platform.openai.com/account/api-keys).

## Credits

This project has been made possible by:

> https://github.com/mckaywrigley/chatbot-ui For the base UI of the project.

> https://github.com/devnjw For the plugin implementation and functionality.

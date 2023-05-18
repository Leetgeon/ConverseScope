# ConverseScope

## Description

ConverseScope is a simple yet effective tool that parses chat data and focuses on specific members' conversations. It is designed to help you filter out the noise in group chats and focus on the dialogues that matter most to you. 

## Features
- Parses chat data and segregates it by member
- Allows selection of a specific member to view their contributions to the conversation
- Easy to use interface with input area, member selection dropdown, and chat display

## Usage

1. Open the HTML file in your web browser.
2. Copy and paste the chat data into the `inputArea`.
3. The `memberSelect` dropdown will be automatically populated with the names of the members found in the chat data.
4. Choose a member from the dropdown menu.
5. The chat display area will then show all the messages that the selected member has contributed to the conversation.

## Code Structure

The project consists of three main files:

- `index.html`: Contains the structure of the web page.
- `styles.css`: Contains all the styles applied to the web page.
- `script.js`: Contains all the JavaScript logic for parsing the chat data and managing the user interface.

## Contribution

Feel free to fork this repository and enhance the functionalities of this tool. Pull requests for improvements are always welcome.

## License

This project is licensed under the MIT License. See `LICENSE` for more information.

**Note:** The chat data should be in the following format for the parsing to work correctly:

```
[Member Name] Message
```

Lines without a member name in brackets at the start are treated as continuations of the last message by the current member.



컨버스스코프
설명
ConverseScope는 채팅 데이터를 파싱하여 특정 멤버의 대화에 집중할 수 있는 간단하면서도 효과적인 도구입니다. 그룹 채팅에서 잡음을 걸러내고 가장 중요한 대화에 집중할 수 있도록 설계되었습니다.

특징
채팅 데이터를 구문 분석하여 구성원별로 분리합니다.
특정 멤버를 선택하여 대화에 대한 기여도를 볼 수 있습니다.
입력 영역, 구성원 선택 드롭다운, 채팅 디스플레이가 있는 사용하기 쉬운 인터페이스
사용 방법
웹 브라우저에서 HTML 파일을 엽니다.
채팅 데이터를 복사하여 입력 영역에 붙여넣습니다.
회원 선택 드롭다운이 채팅 데이터에서 찾은 회원의 이름으로 자동으로 채워집니다.
드롭다운 메뉴에서 멤버를 선택합니다.
그러면 채팅 표시 영역에 선택한 멤버가 대화에 기여한 모든 메시지가 표시됩니다.
코드 구조
프로젝트는 세 개의 주요 파일로 구성되어 있습니다:

index.html: 웹 페이지의 구조를 포함합니다.
styles.css: 웹 페이지에 적용된 모든 스타일을 포함합니다.
script.js: 채팅 데이터를 파싱하고 사용자 인터페이스를 관리하기 위한 모든 JavaScript 로직이 포함되어 있습니다.
기여
이 리포지토리를 자유롭게 포크하여 이 도구의 기능을 향상시켜 주세요. 개선에 대한 풀 리퀘스트는 언제나 환영합니다.

라이선스
이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다. 자세한 내용은 라이선스를 참조하세요.

참고: 구문 분석이 올바르게 작동하려면 채팅 데이터의 형식이 다음이어야 합니다:

csharp
코드 복사
[회원 이름] 메시지
시작 부분에 괄호 안에 멤버 이름이 없는 줄은 현재 멤버가 보낸 마지막 메시지의 연속으로 간주됩니다.

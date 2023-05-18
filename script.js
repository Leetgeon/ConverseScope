document.addEventListener('DOMContentLoaded', function() {
    var inputArea = document.getElementById('inputArea');
    var memberSelect = document.getElementById('memberSelect');
    var chatDisplay = document.getElementById('chatDisplay');
    var conversation = {};

    inputArea.addEventListener('input', function() {
        // clear previous data
        conversation = {};
        memberSelect.innerHTML = '';
        chatDisplay.innerHTML = '';

        // parse text data
        var textData = inputArea.value.split('\n');
        var currentMember = null;
        textData.forEach(function(line) {
            var match = line.match(/\[(.*?)\](.*?)(\[(.*?)\]|$)/s);
            if (match) {
                currentMember = match[1].trim();
                var message = match[2].trim();
                if (!conversation[currentMember]) {
                    conversation[currentMember] = [];
                    // update dropdown
                    var option = document.createElement('option');
                    option.value = currentMember;
                    option.text = currentMember;
                    memberSelect.appendChild(option);
                }
                conversation[currentMember].push(message);
            } else if (currentMember) {
                // Append the line to the current member's last message
                conversation[currentMember][conversation[currentMember].length - 1] += "\n" + line;
            }
        });
    });

    memberSelect.addEventListener('change', function() {
        // clear chat display
        chatDisplay.innerHTML = '';

        // display selected member's conversation
        var selectedMember = memberSelect.value;
        if (conversation[selectedMember]) {
            conversation[selectedMember].forEach(function(message) {
                var p = document.createElement('p');
                p.textContent = message;
                chatDisplay.appendChild(p);
            });
        }
    });
});

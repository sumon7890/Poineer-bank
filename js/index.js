const longBtn = document.getElementById("login");
      longBtn.addEventListener("click", function () {
        const loginArea = document.getElementById("login-aria");
        loginArea.style.display = "none";
        const teanjection_area = document.getElementById("teanjection_area");
        teanjection_area.style.display = "block";
      });

      // Deposite Eeven handelar
      const depositedAdded = document.getElementById("deposited");
      depositedAdded.addEventListener("click", function () {
        const depositAmaount = parseFloatNumber("depositAmaount");
        upDateSpanTotal("currentDeposite", depositAmaount);
        upDateSpanTotal("currentBalance", depositAmaount);
        document.getElementById("depositAmaount").value = "";
      });

      // Withdraw Even handellar
      const WithdrawdMainess = document.getElementById("Withdrawed");
      WithdrawdMainess.addEventListener("click", function () {
        const WithdrawNumber = parseFloatNumber("Withdraw");
        upDateSpanTotal("currentWithdraw", WithdrawNumber);
        upDateBalanceTotal("currentBalance", WithdrawNumber);
        document.getElementById("Withdraw").value = "";
      });
      

      function upDateSpanTotal(id, number) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalBalance = number + currentNumber;
        document.getElementById(id).innerText = totalBalance;
      }

      const longBtn = document.getElementById("login");
      longBtn.addEventListener("click", function () {
        const loginArea = document.getElementById("login-aria");
        loginArea.style.display = "none";
        const teanjection_area = document.getElementById("teanjection_area");
        teanjection_area.style.display = "block";
      });

      // Deposite Eeven handelar
      const depositedAdded = document.getElementById("deposited");
      depositedAdded.addEventListener("click", function () {
        const depositAmaount = parseFloatNumber("depositAmaount");
        upDateSpanTotal("currentDeposite", depositAmaount);
        upDateSpanTotal("currentBalance", depositAmaount);
        document.getElementById("depositAmaount").value = "";
      });

      // Withdraw Even handellar
      const WithdrawdMainess = document.getElementById("Withdrawed");
      WithdrawdMainess.addEventListener("click", function () {
        const WithdrawNumber = parseFloatNumber("Withdraw");
        upDateSpanTotal("currentWithdraw", WithdrawNumber);
        upDateBalanceTotal("currentBalance", WithdrawNumber);
        document.getElementById("Withdraw").value = "";
      });
      // Balance Handller

      function upDateSpanTotal(id, number) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalBalance = number + currentNumber;
        document.getElementById(id).innerText = totalBalance;
      }

      // Balance - withdraw 
      function upDateBalanceTotal(id, number) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalBalance = currentNumber - number;
        document.getElementById(id).innerText = totalBalance;
      }

      function parseFloatNumber(num) {
        const amaount = document.getElementById(num).value;
        const floatNumber = parseFloat(amaount);
        return floatNumber;
      }
   
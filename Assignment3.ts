
function getcreditEligibility(Name, creditScore, income, isemployeed, DTI) {

    if (creditScore > 750) {
        console.log("Lone is Aumatically Approved");

    }
    else if ((creditScore >= 650) && (creditScore < 750)) {
        console.log("Additonal checks are performed");

        if (income >= 50000) {
            console.log("Loan to be considered");

            if (isemployeed == true) {
                if (DTI >= 40) {
                    console.log("Loan Deined");
                }
                else {
                    console.log("Loan Approved");

                }
            }


        }
        else {
            console.log("Loan Deined");

        }

    }

    else {
        console.log("Loan Deined");

    }

}

getcreditEligibility('John', 720, 50000, true, 35);
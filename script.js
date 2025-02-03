// script.js
document.getElementById("predictButton").addEventListener("click", () => {
    const lastPeriodDate = new Date(document.getElementById("lastPeriod").value);
    const cycleLength = parseInt(document.getElementById("cycleLength").value);
    const periodLength = parseInt(document.getElementById("periodLength").value);

    if (isNaN(lastPeriodDate.getTime())) {
        alert("Please enter a valid start date for your last period.");
        return;
    }

    // Calculate next period start date
    const nextPeriodStartDate = new Date(lastPeriodDate);
    nextPeriodStartDate.setDate(lastPeriodDate.getDate() + cycleLength);

    // Calculate fertile window
    const fertileStartDate = new Date(lastPeriodDate);
    fertileStartDate.setDate(lastPeriodDate.getDate() + cycleLength - 18);
    const fertileEndDate = new Date(fertileStartDate);
    fertileEndDate.setDate(fertileStartDate.getDate() + 5);

    // Display results
    document.getElementById("nextPeriod").textContent = nextPeriodStartDate.toDateString();
    document.getElementById("fertileWindow").textContent = `${fertileStartDate.toDateString()} - ${fertileEndDate.toDateString()}`;
    document.getElementById("results").style.display = "block";
});

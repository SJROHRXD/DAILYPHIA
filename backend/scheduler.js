const cron = require("node-cron");
const DefTask = require("./models/defaultTaskModel");
const Task = require("./models/taskModel");

cron.schedule("0 5 * * *", () => {
    console.log(`Cron job running`);

    DefTask.find({}, (err, defTasks) => {
        if (err) {
            console.log(`Error: ${err}`);
            return;
        }

        defTasks.forEach((defTask) => {
            const newTask = new Task({
                taskName: defTask.defTaskName,
                taskDes: defTask.defTaskDes,
                dueDate: new Date(),
                completed: defTask.completed,
                owner: defTask.owner,
            });

            newTask.save((err, savedTask) => {
                if (err) {
                    console.log(`Error: ${err}`);
                    return;
                }

                console.log(`Saved task: ${savedTask}`);
            });
        });
    });
});

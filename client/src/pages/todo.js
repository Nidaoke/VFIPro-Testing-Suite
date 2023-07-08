import React from 'react';

const ToDo = () => {
  return (
    <div>
      <h1>
        <fieldset>
          <legend>To-Do List</legend>
          <input type="checkbox" id="task1" name="task1" checked disabled />
          <label for="task1">Database</label><br></br>
          <input type="checkbox" id="task1-2" name="task1-2" checked disabled />
          <label for="task1-2">GET Requests</label><br></br>
          <input type="checkbox" id="task1-3" name="task1-3" unchecked disabled />
          <label for="task1-3">POST Requests</label><br></br>
          <input type="checkbox" id="task2" name="task2" unchecked disabled />
          <label for="task2">Login?</label><br></br>
          <input type="checkbox" id="task3" name="task3" checked disabled />
          <label for="task3">Interactable Objects</label><br></br>
          <input type="checkbox" id="task4" name="task4" checked disabled />
          <label for="task4">Page Functionality</label><br></br>
          <input type="checkbox" id="task5" name="task5" checked disabled />
          <label for="task5">Routing</label><br></br>
          <input type="checkbox" id="task6" name="task6" unchecked disabled />
          <label for="task6">Data States for Objects</label><br></br>
          <input type="checkbox" id="task7" name="task7" unchecked disabled />
          <label for="task7">Data State Transitions (animations?)</label><br></br>
          <input type="checkbox" id="task8" name="task8" unchecked disabled />
          <label for="task8">Playable Media</label><br></br>
          <input type="checkbox" id="task9" name="task9" unchecked disabled />
          <label for="task9">Submittable Data Forms</label><br></br>
          <input type="checkbox" id="task10" name="task10" unchecked disabled />
          <label for="task10">Store Info Between Views (no database?)</label><br></br>
          <input type="checkbox" id="task11" name="task11" unchecked disabled />
          <label for="task11">Migrate to GoDaddy</label><br></br>
        </fieldset>
      </h1>
    </div>
  );
};

export default ToDo;
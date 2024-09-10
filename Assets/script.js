// Object to store the rotation angle for each circle
const circleRotations = {
    circle1: 0,
    circle2: 0,
    circle3: 0,
    circle4: 0,
    circle5: 0
  };
  
  let selectedCircleId = null;
  
  function selectCircle(circleId) {
    selectedCircleId = circleId;
    document.getElementById('selectedCircleText').textContent = `Selected ${circleId}`;
  }
  
  function rotate(direction) {
    if (selectedCircleId) {
      // Update the rotation angle for the selected circle
      circleRotations[selectedCircleId] += (direction === 'right' ? 15 : -15);
  
      // Get the selected circle element
      const circleElement = document.getElementById(selectedCircleId);
  
      // Apply the rotation transform
      circleElement.style.transform = `translate(-50%, -50%) rotate(${circleRotations[selectedCircleId]}deg)`;
    }
  }
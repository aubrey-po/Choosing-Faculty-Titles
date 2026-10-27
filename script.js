const form = document.getElementById('title-form');
const titleResult = document.getElementById('title-result');
const titleReason = document.getElementById('title-reason');

function getRecommendation(stage, research, teaching, service) {
  const stageWeights = {
    early: 1,
    mid: 2,
    senior: 3,
  };

  const researchWeights = {
    developing: 1,
    independent: 2,
    recognized: 3,
  };

  const teachingWeights = {
    core: 1,
    leadership: 2,
    strategic: 3,
  };

  const serviceWeights = {
    routine: 1,
    significant: 2,
    high: 3,
  };

  const score =
    stageWeights[stage] +
    researchWeights[research] +
    teachingWeights[teaching] +
    serviceWeights[service];

  if (score <= 5) {
    return {
      title: 'Assistant Professor',
      reason:
        'This profile is consistent with a foundational appointment focused on building evidence and growth in research, teaching, and service.',
    };
  }

  if (score <= 8) {
    return {
      title: 'Associate Professor',
      reason:
        'This profile suggests sustained academic contribution, increasing independence, and evidence of impact in the discipline and institution.',
    };
  }

  return {
    title: 'Professor',
    reason:
      'This profile reflects a strong record of scholarly distinction, leadership, and sustained institutional contribution expected at the highest faculty rank.',
  };
}

function updateRecommendation() {
  const stage = document.getElementById('stage').value;
  const research = document.getElementById('research').value;
  const teaching = document.getElementById('teaching').value;
  const service = document.getElementById('service').value;

  const recommendation = getRecommendation(stage, research, teaching, service);
  titleResult.textContent = recommendation.title;
  titleReason.textContent = recommendation.reason;
}

form.addEventListener('change', updateRecommendation);
updateRecommendation();

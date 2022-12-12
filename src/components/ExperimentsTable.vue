import { SamplesType, ReagentsType, ReplicatesType } from
'../logic/utils/types';
<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:mx-6 lg:mx-8">
      <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <thead class="border-b bg-gray-800">
              <tr>
                <th
                  scope="col"
                  class="text-sm font-medium text-white px-6 py-4"
                >
                  Experiment
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-white px-6 py-4"
                >
                  Samples
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-white px-6 py-4"
                >
                  Reagents
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-white px-6 py-4"
                >
                  Replicates number
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-white px-6 py-4"
                >
                  Delete?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b"
                v-for="(experiment, index) in experiments"
                :key="index"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                >
                  {{ experiment.id }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r"
                >
                  {{ experiment.samples }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r"
                >
                  {{ experiment.reagents }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r"
                >
                  {{ experiment.replicate }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  <button @click="() => deleteExperiment(experiment)">
                    Delete?
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const experiments = ref<
  {
    id: number;
    samples: string[];
    reagents: string[];
    replicate: number;
  }[]
>([
  {
    id: 1,
    samples: ["Sample 1", "Sample 2"],
    reagents: ["Reagent X", "Reagent Y"],
    replicate: 2,
  },
  {
    id: 2,
    samples: ["Sample 1", "Sample 3"],
    reagents: ["Reagent Z"],
    replicate: 5,
  },
]);

const deleteExperiment = (experiment: {
  id: number;
  samples: string[];
  reagents: string[];
  replicate: number;
}): void => {
  experiments.value = experiments.value.filter((e) => e.id === experiment.id);
};
</script>

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

import { useStage } from '../context/StageContext'

const pipelines = [
  { id: 1, stagename: 'Prospecting' },
  { id: 2, stagename: 'Lead Qualification' },
  { id: 3, stagename: 'Meeting' },
  { id: 4, stagename: 'Proposal' },
  { id: 5, stagename: 'Deal Won' },
  { id: 6, stagename: 'Deal Lost' },

  // More users...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  const { selectedStage, setSelectedStage } = useStage()

  const handleStageSelection = (stage) => {
    setSelectedStage(stage)
  }
  const [query, setQuery] = useState('')
  //   const [selectedStage, setSelectedStage] = useState(null)

  const filteredStage =
    query === ''
      ? pipelines
      : pipelines.filter((pipeline) => {
          return pipeline.stagename.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox as="div" value={selectedStage} onChange={handleStageSelection}>
      {/* <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
        Assigned to
      </Combobox.Label> */}
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          value={selectedStage ? selectedStage.stagename : ''}
          placeholder="Choose Stage here"
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredStage.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredStage.map((stage) => (
              <Combobox.Option
                key={stage.id}
                value={stage.stagename}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        'block truncate',
                        selected && 'font-semibold'
                      )}
                    >
                      {stage.stagename}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}

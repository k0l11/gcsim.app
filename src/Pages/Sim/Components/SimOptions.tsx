import { Button, Card } from "@blueprintjs/core";
import React from "react";
import { NumberInput } from "~src/Components/NumberInput";
import { RootState, useAppDispatch, useAppSelector } from "~src/store";
import { setTotalWorkers } from "..";
import { Trans, useTranslation } from "react-i18next";

export function SimOptions() {
  let { t } = useTranslation()

  const { workers } = useAppSelector((state: RootState) => {
    return {
      workers: state.sim.workers,
    };
  });
  const dispatch = useAppDispatch();
  const [next, setNext] = React.useState<number>(workers);

  const updateWorkers = () => {
    dispatch(setTotalWorkers(next));
  };

  return (
    <Card className="m-2">
      <div className="w-full wide:basis-0 flex-grow p-2 text-center flex flex-row">
        <div className="flex-grow">
          <NumberInput
            label={`${t("components.currently_loaded_workers")}${workers}`}
            onChange={(v) => setNext(v)}
            value={next}
            min={1}
            max={30}
            integerOnly
          />
        </div>
        <div className="w-1/3">
          <Button onClick={updateWorkers}><Trans>components.set</Trans></Button>
        </div>
      </div>
    </Card>
  );
}

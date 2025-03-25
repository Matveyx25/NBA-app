import React, { useEffect, useState } from "react";
import { useAllGames } from "../hooks/games";
import { Button } from "../components/shared/button/button";
import s from "./Home.module.scss";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Select from "react-select";

export const Home = () => {
	const [params, setParams] = useState()
  const { data: games } = useAllGames(params);

  const methods = useForm({
    defaultValues: {
      league: ""
    },
    mode: "onBlur",
  });

  const { register, handleSubmit, formState } = methods;

	const [result, setResult] = useState()

  const onSubmit = handleSubmit((values) => {
    setParams(values);
  });

  return (
		<div>
			<FormProvider {...methods}>
				<Controller 
					name="league"
					render={({field}) => (
						<Select 
							value={field.valuwe}
							onChange={(e) => field.onChange(e.value)}
							options={[
								{label: "Africa", value: 'Africa'},
								{label: "Orlando", value: 'Orlando'},
								{label: "Sacramento", value: 'Sacramento'},
								{label: "Standard", value: 'Standard'},
								{label: "Utah", value: 'Utah'},
								{label: "Vegas", value: 'Vegas'},
							]}/>
					)}/>
				<Button onClick={onSubmit} label={'submit'}/>
			</FormProvider>
      <table className={s.table}>
        <thead className={s.tableHeader}>
          <tr>
						<th>id</th>
						<th>date</th>
						<th>a</th>
						<th>b</th>
					</tr>
        </thead>
        <tbody>
          {games?.data?.map((el) => (
            <tr className={s.tableRow}>
              <td>{el.id}</td>
              <td>{el.date}</td>
              <td>a</td>
              <td>b</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

import React, {useState, useEffect} from "react";
import * as C from "./styles";

import { Item } from "../../@types/Item";
import { Category } from "../../@types/Category";

import { categories } from "../../data/categories";
import { items } from "../../data/items";

import { getCurrentMonth, filterListByMonth } from "../../helpers/dateFilter";

import { InfoArea } from "../../components/infoArea";
import { InputArea } from "../../components/inputArea";
import { TableArea } from "../../components/tableArea";

const Dashboard = () => {

    //lista geral, sem filtro
    const [list, setList] = useState(items);

    //lista filtrada
    const [filteredList, setFilteredList] = useState<Item[]>([]);

    //pegar o mes e ano
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

    //receita
    const [income, setIncome] = useState(0);

    //despesas
    const [expense, setExpense] = useState(0);


    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth));
    }, [list, currentMonth]);

    useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;

        for (let i in filteredList) {
            if(categories[filteredList[i].category].expense) {
                expenseCount += filteredList[i].value;
            } else {
                incomeCount += filteredList[i].value;   
            }
        }

        setIncome(incomeCount);
        setExpense(expenseCount);
    }, [filteredList])
    
    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth);
    }

    const handleAddItem = (item: Item) => {
        let newList = [...list];
        newList.push(item);
        setList(newList);
      }

    return (

        <C.Container>
            <C.Header>
                <C.HeaderText>Sistema Financeiro</C.HeaderText>
            </C.Header>
            <C.Body>
                {/*área de informações*/}
                <InfoArea 
                currentMonth={currentMonth}
                onMonthChange={handleMonthChange}
                income={income}
                expense={expense}
                />

                {/*área de inserção*/}
                <InputArea onAdd={handleAddItem} />

                {/*área de conteúdo*/}
                <TableArea list={filteredList}/>
            </C.Body>
        </C.Container>
    )

}

export default Dashboard;
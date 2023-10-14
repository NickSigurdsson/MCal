import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const foodData = [
  { name: 'Apple', amount: '100g', calories: 52, fat: 0.2, carbs: 14, protein: 0.3 },
  { name: 'Banana', amount: '100g', calories: 89, fat: 0.3, carbs: 23, protein: 1.1 },
  { name: 'Chicken Breast', amount: '100g', calories: 165, fat: 3.6, carbs: 0, protein: 31 },
];

function Meals() {
    const [foodItem, setFoodItem] = useState('');
    const [nutritionData, setNutritionData] = useState([]);
    const [showAddItem, setShowAddItem] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSearch = () => {
        if (foodItem.trim() === '') {
            return;
        }

        const filteredData = foodData.filter((item) =>
            item.name.toLowerCase().includes(foodItem.toLowerCase())
        );
        
        setNutritionData(filteredData)
        setShowAddItem(true);
    };

    const handleAddItemClick = (item) => {
        setSelectedItems([...selectedItems, item]);
    };

  return (
    <div style={{ paddingLeft: '40px', paddingTop: '20px' }}>
        <div style={{ paddingBottom: '20px'}}>
            <Typography variant="h5" gutterBottom>
                Calories Tracker
            </Typography>
        </div>
        <TextField
            label="Search for a food item"
            variant="outlined"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
        />
        <IconButton variant="contained" onClick={handleSearch} color="primary">
            <SearchIcon />
        </IconButton>
        {nutritionData.length > 0 && (
            <Box marginTop={4}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell>Food Item</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Calories</TableCell>
                            <TableCell>Fat (g)</TableCell>
                            <TableCell>Carbs (g)</TableCell>
                            <TableCell>Protein (g)</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {nutritionData.map((item, index) => (
                            <TableRow key={index}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.amount}</TableCell>
                            <TableCell>{item.calories}</TableCell>
                            <TableCell>{item.fat}</TableCell>
                            <TableCell>{item.carbs}</TableCell>
                            <TableCell>{item.protein}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {showAddItem && (
                    <Box marginTop={2}>
                        <Button variant="contained" color="primary" onClick={handleAddItemClick}>
                            Add Item
                        </Button>
                    </Box>
                )}
            </Box>
        )}
        {selectedItems.length > 0 && (
            <Box marginTop={4}>
                <Typography variant="h6" gutterBottom>
                    Selected Items
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Food Item</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Calories</TableCell>
                        <TableCell>Fat (g)</TableCell>
                        <TableCell>Carbs (g)</TableCell>
                        <TableCell>Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {selectedItems.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.amount}</TableCell>
                            <TableCell>{item.calories}</TableCell>
                            <TableCell>{item.fat}</TableCell>
                            <TableCell>{item.carbs}</TableCell>
                            <TableCell>{item.protein}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        )}
    </div>
  );
}

export default Meals;

-- Add UNIQUE constraint to trainer_name column in trainer table
ALTER TABLE trainer ADD CONSTRAINT unique_trainer_name UNIQUE (trainer_name);

-- Add UNIQUE constraint to town_name column in town table  
ALTER TABLE town ADD CONSTRAINT unique_town_name UNIQUE (town_name);

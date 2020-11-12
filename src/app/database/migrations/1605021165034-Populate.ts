import { MigrationInterface, QueryRunner } from 'typeorm';

export default class Populate1605021165034 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO products (id,name,brand,description,price,discount,created_at,updated_at) VALUES 
    ('a74eb5ea-7ebe-4130-a3d6-d1943438c119','Kit de cama 210 fios','Classic','Solteiro Extra',298.00,10,'2020-11-07 15:01:32.259','2020-11-07 15:01:32.259')
    ,('f76b2554-22eb-4a2d-a9ac-89f4374b5a9f','Travesseiros Cassic','Classic','Travesseiro de Algodão',114.90,0,'2020-11-07 15:01:32.259','2020-11-07 15:01:32.259')
    ,('d5405664-a8eb-4cc3-9735-43b62c13e248','Macbook Pro 13','Apple','Notebook da Apple',10000.00,0,'2020-11-09 18:33:55.585','2020-11-09 18:33:55.585')
    ,('c0330f2e-7f6d-4393-892e-76b4e9c64eba','Macbook Pro 16','Apple','Notebook da Apple',18000.00,10,'2020-11-09 18:33:55.585','2020-11-09 18:33:55.585')
    ,('ee98db8e-81ef-48e5-a59a-b5a263f86dbc','Mouse Sem Fio ','Logitech','Mouse da Logitech',259.00,0,'2020-11-09 18:33:55.585','2020-11-09 18:33:55.585')
    ,('4aae9011-a288-492b-a43e-6094fab23786','Monitor 21 Polegadas','Sansung','Monitor da Snasung',1900.00,5,'2020-11-09 18:33:55.585','2020-11-09 18:33:55.585')
    ,('9cc911b1-880f-4aa6-a044-e8fb56dcaafb','Teclado Gamer','Razer','Teclado da Razer',830.00,0,'2020-11-09 18:33:55.585','2020-11-09 18:33:55.585')
    ,('5d1ccc1d-6f95-4b1c-87a4-f21c67d36a9d','Adaptador Usb','Dell','Adaptador Usb da Dell',129.00,0,'2020-11-09 18:33:55.585','2020-11-09 18:33:55.585')
    ,('321002d3-2ddc-442b-b4ee-5a889b17bc00','Notebook Dell','Dell','Notebook da Dell',3200.00,0,'2020-11-09 18:33:55.585','2020-11-09 18:33:55.585')
    ,('fe7777c7-525f-4e42-9109-d0b56e13ca5b','Notebook Acer','Acer','Notebook da Acer',3000.00,10,'2020-11-09 18:33:55.585','2020-11-09 18:33:55.585'),
    ('4c23febc-3dba-4f4a-bc70-c90edeb39aea','Notebook Lenovo','Lenovo','Ideapad 320',2699.00,7,'2020-11-09 18:33:55.585','2020-11-09 18:33:55.585')
    ,('9bf64e34-db63-4555-88d5-3809117ce1f7','Garrafa térmica','Classic','Garraf térmica 500 ml',79.90,0,'2020-11-09 18:33:55.585','2020-11-09 18:33:55.585')
    ,('5833ac25-6a62-4e5b-bf6d-7bd2f1749f5a','Macbook Air','Apple','Notebook da Apple',8900.00,0,'2020-11-09 18:37:21.785','2020-11-09 18:37:21.785')
    ,('57919055-2e5d-484d-b399-547e33a03392','Magic Keyboard','Apple','Teclado da Apple',600.00,0,'2020-11-09 18:37:21.785','2020-11-09 18:37:21.785')
    ,('d062ce4a-9101-49eb-ba30-a2dec0371253','Teclado Sem Fio ','Logitech','Teclado da Logitech',4207.00,0,'2020-11-09 18:37:21.785','2020-11-09 18:37:21.785')
    ,('9387ede1-7d50-435c-997c-21093fb359f7','Monitor 27 LG','LG','Monitor da LG',2100.00,0,'2020-11-09 18:37:21.785','2020-11-09 18:37:21.785')
    ,('d9dfcdf3-e06e-49ff-889c-e59f762db618','Adaptador HDMI','Dell','Adaptador HDMI da Dell',159.00,0,'2020-11-09 18:37:21.785','2020-11-09 18:37:21.785');`);

    await queryRunner.query(`INSERT INTO public.products_images (id, path, subtitle, product_id) VALUES 
    ('48bd735d-2926-4fa7-9075-c11841bfe17f','d9e145279ab27cc469a6-cama.jpg','Cama','a74eb5ea-7ebe-4130-a3d6-d1943438c119')
    ,('39f490f4-cd80-4d9f-bccc-fd9987381f55','5c93e58e635656c5b773-cama2.jpeg','Cama 2','a74eb5ea-7ebe-4130-a3d6-d1943438c119')
    ,('0934f930-4ea3-482c-b753-bcaf82ced919','01e213da43fa5f684711-cama3.jpeg','Cama 3','a74eb5ea-7ebe-4130-a3d6-d1943438c119')
    ,('b39109e0-bf75-47f1-82f5-1ef58aa98a47','1b88ce7cfcf3ba928983-cama4.jpeg','Cama 4','a74eb5ea-7ebe-4130-a3d6-d1943438c119')
    ,('acdb50c4-cf7f-49be-9e1f-456676c074aa','1b75e57db361510b60e6-travesseiro1.jpeg','Travesseiro Duplo','f76b2554-22eb-4a2d-a9ac-89f4374b5a9f')
    ,('020ed830-55e5-4a39-927a-bae4aada13b8','2d9bb12e8bf24972962f-travesseiro1.jpeg','Travesseiro Duplo','f76b2554-22eb-4a2d-a9ac-89f4374b5a9f')
    ,('fb1d7f68-12be-478e-9a33-24e8a31f0fc0','311f568f94484ec52279-travesseiro1.jpeg','Travesseiro Duplo','f76b2554-22eb-4a2d-a9ac-89f4374b5a9f')
    ,('997d7a3e-b1c9-4662-8fba-508b1c9128ea','dce3ce874f984ce4952d-travesseiro1.jpeg','Travesseiro Duplo','f76b2554-22eb-4a2d-a9ac-89f4374b5a9f')
    ,('9cdbfa68-b859-4817-8642-938b6ffabbc0','7a497e24e1ac64d32f8d-notebook.jpeg','Macbook','5833ac25-6a62-4e5b-bf6d-7bd2f1749f5a')
    ,('e26b55c4-f918-4734-8432-ef15ec7beb21','7a497e24e1ac64d32f8d-notebook.jpeg','Macbook','5833ac25-6a62-4e5b-bf6d-7bd2f1749f5a')
    ,('ed658616-e14c-47ce-9236-f006ba4fb9b9','7a497e24e1ac64d32f8d-notebook.jpeg','Macbook','5833ac25-6a62-4e5b-bf6d-7bd2f1749f5a')
    ,('0585148e-d88c-42e2-adc4-7a99184cc86b','7a497e24e1ac64d32f8d-notebook.jpeg','Macbook','5833ac25-6a62-4e5b-bf6d-7bd2f1749f5a')
    ,('362ffff0-9f40-4dcf-8152-923d6f12af31','48af4ad356c96b064c3d-mouse-sem-fio.jpeg','Mouse','ee98db8e-81ef-48e5-a59a-b5a263f86dbc')
    ,('dbe5d122-bd45-4c9d-a746-998c0f290819','48af4ad356c96b064c3d-mouse-sem-fio.jpeg','Mouse','ee98db8e-81ef-48e5-a59a-b5a263f86dbc')
    ,('e3871fea-b181-45bb-9859-20416894e5d5','48af4ad356c96b064c3d-mouse-sem-fio.jpeg','Mouse','ee98db8e-81ef-48e5-a59a-b5a263f86dbc')
    ,('e443338e-79bc-48d9-9b0e-45fb5804d4e4','48af4ad356c96b064c3d-mouse-sem-fio.jpeg','Mouse','ee98db8e-81ef-48e5-a59a-b5a263f86dbc')
    ,('3f7c54a1-66a6-47d9-89be-fdd566b6e87c','b83bfea41b5564955cca-garrafa-termica.jpeg','Garrafa','9bf64e34-db63-4555-88d5-3809117ce1f7')
    ,('0bd0359f-37f0-4046-9bb4-12850c80b0f7','b83bfea41b5564955cca-garrafa-termica.jpeg','Garrafa','9bf64e34-db63-4555-88d5-3809117ce1f7')
    ,('7ba5c41e-71cd-4c31-b239-27383ed531da','b83bfea41b5564955cca-garrafa-termica.jpeg','Garrafa','9bf64e34-db63-4555-88d5-3809117ce1f7')
    ,('043741db-0704-4d34-b4b9-00ab5f45a8d1','b83bfea41b5564955cca-garrafa-termica.jpeg','Garrafa','9bf64e34-db63-4555-88d5-3809117ce1f7')
    ,('e6281643-bc99-4341-ab76-0b5fc1432d96','2d613cbfdf0fbbfbc58c-notebook-dell.jpeg','Notebook Dell','321002d3-2ddc-442b-b4ee-5a889b17bc00')
    ,('c6ea1cb6-0159-466c-9c52-5291fb7acba0','2d613cbfdf0fbbfbc58c-notebook-dell.jpeg','Notebook Dell','321002d3-2ddc-442b-b4ee-5a889b17bc00')
    ,('6e31fa3d-75ba-4c12-b8a1-cd971df65496','2d613cbfdf0fbbfbc58c-notebook-dell.jpeg','Notebook Dell','321002d3-2ddc-442b-b4ee-5a889b17bc00')
    ,('a5665e18-2ba0-43ec-adfe-e55af61e50c6','2d613cbfdf0fbbfbc58c-notebook-dell.jpeg','Notebook Dell','321002d3-2ddc-442b-b4ee-5a889b17bc00')
    ,('311561bc-1d27-46bb-b41c-118fd0e10627','add2d08ce6992aa0a3c7-adaptador-usb.jpeg','Adaptador HDMI','d9dfcdf3-e06e-49ff-889c-e59f762db618')
    ,('f367747e-3810-45f1-afff-45721411870d','add2d08ce6992aa0a3c7-adaptador-usb.jpeg','Adaptador HDMI','d9dfcdf3-e06e-49ff-889c-e59f762db618')
    ,('29909cc3-c2d5-4647-8d4e-a575ecca14e2','add2d08ce6992aa0a3c7-adaptador-usb.jpeg','Adaptador HDMI','d9dfcdf3-e06e-49ff-889c-e59f762db618')
    ,('7f6e5a47-8efe-4483-be8e-db9df6d95a3a','add2d08ce6992aa0a3c7-adaptador-usb.jpeg','Adaptador HDMI','d9dfcdf3-e06e-49ff-889c-e59f762db618')
    ,('62835aa2-5632-4349-8339-c3cbe0c5751c','b3ea8f5f4de166d8bbc5-notebook.jpeg','Macbook','d5405664-a8eb-4cc3-9735-43b62c13e248')
    ,('ce8a0a49-9a80-468e-a642-e0d8fc789928','003c50b9cc0b92d370ff-notebook.jpeg','Macbook 16','c0330f2e-7f6d-4393-892e-76b4e9c64eba')
    ,('712083ad-4811-4003-a923-9ce907b2964e','b3ea8f5f4de166d8bbc5-notebook.jpeg','Macbook','d5405664-a8eb-4cc3-9735-43b62c13e248')
    ,('472233d0-6adb-426a-b96e-558a3f0a0607','b3ea8f5f4de166d8bbc5-notebook.jpeg','Macbook','d5405664-a8eb-4cc3-9735-43b62c13e248')
    ,('148abefe-c6ce-4224-b44f-47cfbad4b6b3','b3ea8f5f4de166d8bbc5-notebook.jpeg','Macbook','d5405664-a8eb-4cc3-9735-43b62c13e248')
    ,('a7ec06af-02cb-4b57-b8b4-c3fa7a6c786a','003c50b9cc0b92d370ff-notebook.jpeg','Macbook 16','c0330f2e-7f6d-4393-892e-76b4e9c64eba')
    ,('8d9175fb-5233-4d70-b30a-eebc9e56c9f3','003c50b9cc0b92d370ff-notebook.jpeg','Macbook 16','c0330f2e-7f6d-4393-892e-76b4e9c64eba')
    ,('2753a8d2-8630-40b2-8263-62ed4ecf7230','003c50b9cc0b92d370ff-notebook.jpeg','Macbook 16','c0330f2e-7f6d-4393-892e-76b4e9c64eba')
    ,('4b6287bf-38f4-4340-9e80-34fa8e535c6c','9bbf7d0e28203f21041a-magic-keyboard.jpeg','Magic Keyboard','57919055-2e5d-484d-b399-547e33a03392')
    ,('88bfbbfb-d0e4-40a4-abc2-2de3a7c94612','9bbf7d0e28203f21041a-magic-keyboard.jpeg','Magic Keyboard','57919055-2e5d-484d-b399-547e33a03392')
    ,('3e89ea31-8ab3-4ccb-bd88-9490070284c1','9bbf7d0e28203f21041a-magic-keyboard.jpeg','Magic Keyboard','57919055-2e5d-484d-b399-547e33a03392')
    ,('99ed32c3-3d48-43d6-8ad9-ce90486a230f','9bbf7d0e28203f21041a-magic-keyboard.jpeg','Magic Keyboard','57919055-2e5d-484d-b399-547e33a03392');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM products');
    await queryRunner.query('DELETE FROM products_images');
  }
}

﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.UchetMedZueva7
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Список на медосм.
    /// </summary>
    // *** Start programmer edit section *** (СписокНаМедосм CustomAttributes)

    // *** End programmer edit section *** (СписокНаМедосм CustomAttributes)
    [AutoAltered()]
    [Caption("Список на медосм")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СписокНаМедосмE", new string[] {
            "Дата as \'Дата\'",
            "Номер as \'Номер\'",
            "Сотрудники.Фамилия as \'Фамилия ОЛ\'",
            "Сотрудники.Имя as \'Имя ОЛ\'",
            "Сотрудники.Отчество as \'Отчество ОЛ\'",
            "Сотрудники.Должности.Наименование as \'Должность\'"})]
    [AssociatedDetailViewAttribute("СписокНаМедосмE", "КонтингентСотр", "КонтингентСотрE", true, "", "Контингент сотрудников", true, new string[] {
            ""})]
    [View("СписокНаМедосмL", new string[] {
            "Дата as \'Дата\'",
            "Номер as \'Номер\'",
            "Сотрудники.Фамилия as \'Фамилия\'"})]
    public class СписокНаМедосм : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата = System.DateTime.Now;
        
        private int fНомер;
        
        private IIS.UchetMedZueva7.Сотрудники fСотрудники;
        
        private IIS.UchetMedZueva7.DetailArrayOfКонтингентСотр fКонтингентСотр;
        
        // *** Start programmer edit section *** (СписокНаМедосм CustomMembers)

        // *** End programmer edit section *** (СписокНаМедосм CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (СписокНаМедосм.Дата CustomAttributes)

        // *** End programmer edit section *** (СписокНаМедосм.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (СписокНаМедосм.Дата Get start)

                // *** End programmer edit section *** (СписокНаМедосм.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (СписокНаМедосм.Дата Get end)

                // *** End programmer edit section *** (СписокНаМедосм.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СписокНаМедосм.Дата Set start)

                // *** End programmer edit section *** (СписокНаМедосм.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (СписокНаМедосм.Дата Set end)

                // *** End programmer edit section *** (СписокНаМедосм.Дата Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (СписокНаМедосм.Номер CustomAttributes)

        // *** End programmer edit section *** (СписокНаМедосм.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (СписокНаМедосм.Номер Get start)

                // *** End programmer edit section *** (СписокНаМедосм.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (СписокНаМедосм.Номер Get end)

                // *** End programmer edit section *** (СписокНаМедосм.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СписокНаМедосм.Номер Set start)

                // *** End programmer edit section *** (СписокНаМедосм.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (СписокНаМедосм.Номер Set end)

                // *** End programmer edit section *** (СписокНаМедосм.Номер Set end)
            }
        }
        
        /// <summary>
        /// Список на медосм.
        /// </summary>
        // *** Start programmer edit section *** (СписокНаМедосм.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (СписокНаМедосм.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.UchetMedZueva7.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (СписокНаМедосм.Сотрудники Get start)

                // *** End programmer edit section *** (СписокНаМедосм.Сотрудники Get start)
                IIS.UchetMedZueva7.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (СписокНаМедосм.Сотрудники Get end)

                // *** End programmer edit section *** (СписокНаМедосм.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СписокНаМедосм.Сотрудники Set start)

                // *** End programmer edit section *** (СписокНаМедосм.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (СписокНаМедосм.Сотрудники Set end)

                // *** End programmer edit section *** (СписокНаМедосм.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Список на медосм.
        /// </summary>
        // *** Start programmer edit section *** (СписокНаМедосм.КонтингентСотр CustomAttributes)

        // *** End programmer edit section *** (СписокНаМедосм.КонтингентСотр CustomAttributes)
        public virtual IIS.UchetMedZueva7.DetailArrayOfКонтингентСотр КонтингентСотр
        {
            get
            {
                // *** Start programmer edit section *** (СписокНаМедосм.КонтингентСотр Get start)

                // *** End programmer edit section *** (СписокНаМедосм.КонтингентСотр Get start)
                if ((this.fКонтингентСотр == null))
                {
                    this.fКонтингентСотр = new IIS.UchetMedZueva7.DetailArrayOfКонтингентСотр(this);
                }
                IIS.UchetMedZueva7.DetailArrayOfКонтингентСотр result = this.fКонтингентСотр;
                // *** Start programmer edit section *** (СписокНаМедосм.КонтингентСотр Get end)

                // *** End programmer edit section *** (СписокНаМедосм.КонтингентСотр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СписокНаМедосм.КонтингентСотр Set start)

                // *** End programmer edit section *** (СписокНаМедосм.КонтингентСотр Set start)
                this.fКонтингентСотр = value;
                // *** Start programmer edit section *** (СписокНаМедосм.КонтингентСотр Set end)

                // *** End programmer edit section *** (СписокНаМедосм.КонтингентСотр Set end)
            }
        }
        
        // *** Start programmer edit section *** (СписокНаМедосм.Отправить CustomAttributes)

        // *** End programmer edit section *** (СписокНаМедосм.Отправить CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Отправить()
        {
            // *** Start programmer edit section *** (СписокНаМедосм.Отправить method implementation)
            return;
            // *** End programmer edit section *** (СписокНаМедосм.Отправить method implementation)
        }
        
        // *** Start programmer edit section *** (СписокНаМедосм.Печать CustomAttributes)

        // *** End programmer edit section *** (СписокНаМедосм.Печать CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Печать()
        {
            // *** Start programmer edit section *** (СписокНаМедосм.Печать method implementation)
            return;
            // *** End programmer edit section *** (СписокНаМедосм.Печать method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СписокНаМедосмE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СписокНаМедосмE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СписокНаМедосмE", typeof(IIS.UchetMedZueva7.СписокНаМедосм));
                }
            }
            
            /// <summary>
            /// "СписокНаМедосмL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СписокНаМедосмL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СписокНаМедосмL", typeof(IIS.UchetMedZueva7.СписокНаМедосм));
                }
            }
        }
    }
}

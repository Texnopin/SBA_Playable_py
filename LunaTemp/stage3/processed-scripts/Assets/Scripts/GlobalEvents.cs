using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class GlobalEvents : MonoBehaviour
{
    public static UnityEvent OnAddCoinEvent = new UnityEvent();
    public static void SendOnAddCoin() { OnAddCoinEvent.Invoke(); }

    public static UnityEvent OnAddCornEvent = new UnityEvent();
    public static void SendOnAddCorn() { OnAddCornEvent.Invoke(); }

    public static UnityEvent OnAddPopcornEvent = new UnityEvent();
    public static void SendOnAddPopcorn() { OnAddPopcornEvent.Invoke(); }

    public static UnityEvent OnEndScreenEvent = new UnityEvent();
    public static void SendOnEndScreen() { OnEndScreenEvent.Invoke(); }

}
